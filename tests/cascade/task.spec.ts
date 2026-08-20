import { describe, expect, it, vi } from "vitest";
import { TaskManager } from "src/cascade/task";

describe("TaskManager download monitoring", () => {
  it("falls back to polling when EventSource is unavailable in Node", async () => {
    const getTaskStatus = vi.fn().mockResolvedValue({ status: "sdk:completed" });
    const getTask = vi.fn().mockResolvedValue({
      task_id: "download-1",
      status: "sdk:completed",
    });
    const watchDownloadTask = vi.fn(() => {
      throw new Error("EventSource is not defined");
    });
    const client = { getTaskStatus, getTask, watchDownloadTask } as any;
    const manager = new TaskManager(client, "download-1", {
      timeout: 1_000,
      pollInterval: 1,
      initialStatusDelay: 0,
    });

    // Vitest's Node environment has no browser EventSource.
    expect(globalThis.EventSource).toBeUndefined();
    await manager.waitForDownloadCompletion();

    expect(getTaskStatus).toHaveBeenCalledWith("download-1");
    // Download tasks expose status/history but are not present in the upload
    // task-detail endpoint, so the Node fallback must not call getTask().
    expect(getTask).not.toHaveBeenCalled();
    expect(watchDownloadTask).not.toHaveBeenCalled();
  });
});
