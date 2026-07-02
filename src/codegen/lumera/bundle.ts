// @ts-nocheck
/* eslint-disable */
import * as _175 from "./action/module/v1/module";
import * as _176 from "./action/v1/action_state";
import * as _177 from "./action/v1/action_type";
import * as _178 from "./action/v1/action";
import * as _179 from "./action/v1/genesis";
import * as _180 from "./action/v1/metadata";
import * as _181 from "./action/v1/params";
import * as _182 from "./action/v1/query";
import * as _183 from "./action/v1/tx";
import * as _184 from "./audit/module/v1/module";
import * as _185 from "./audit/v1/audit";
import * as _186 from "./audit/v1/epoch";
import * as _187 from "./audit/v1/evidence_metadata";
import * as _188 from "./audit/v1/evidence";
import * as _189 from "./audit/v1/genesis";
import * as _190 from "./audit/v1/params";
import * as _191 from "./audit/v1/query";
import * as _192 from "./audit/v1/tx";
import * as _193 from "./claim/claim_record";
import * as _194 from "./claim/genesis";
import * as _195 from "./claim/params";
import * as _196 from "./claim/query";
import * as _197 from "./claim/tx";
import * as _198 from "./erc20policy/tx";
import * as _199 from "./evmigration/genesis";
import * as _200 from "./evmigration/migration_record";
import * as _201 from "./evmigration/params";
import * as _202 from "./evmigration/proof";
import * as _203 from "./evmigration/query";
import * as _204 from "./evmigration/tx";
import * as _205 from "./lumeraid/genesis";
import * as _206 from "./lumeraid/handshake_info";
import * as _207 from "./lumeraid/params";
import * as _208 from "./lumeraid/query";
import * as _209 from "./lumeraid/tx";
import * as _210 from "./supernode/module/v1/module";
import * as _211 from "./supernode/v1/evidence";
import * as _212 from "./supernode/v1/genesis";
import * as _213 from "./supernode/v1/ip_address_history";
import * as _214 from "./supernode/v1/metrics_aggregate";
import * as _215 from "./supernode/v1/metrics";
import * as _216 from "./supernode/v1/params";
import * as _217 from "./supernode/v1/query";
import * as _218 from "./supernode/v1/super_node";
import * as _219 from "./supernode/v1/supernode_account_history";
import * as _220 from "./supernode/v1/supernode_state";
import * as _221 from "./supernode/v1/tx";
import * as _354 from "./action/v1/tx.amino";
import * as _355 from "./audit/v1/tx.amino";
import * as _356 from "./claim/tx.amino";
import * as _357 from "./erc20policy/tx.amino";
import * as _358 from "./evmigration/tx.amino";
import * as _359 from "./lumeraid/tx.amino";
import * as _360 from "./supernode/v1/tx.amino";
import * as _361 from "./action/v1/tx.registry";
import * as _362 from "./audit/v1/tx.registry";
import * as _363 from "./claim/tx.registry";
import * as _364 from "./erc20policy/tx.registry";
import * as _365 from "./evmigration/tx.registry";
import * as _366 from "./lumeraid/tx.registry";
import * as _367 from "./supernode/v1/tx.registry";
import * as _368 from "./action/v1/query.rpc.func";
import * as _369 from "./audit/v1/query.rpc.func";
import * as _370 from "./claim/query.rpc.func";
import * as _371 from "./evmigration/query.rpc.func";
import * as _372 from "./lumeraid/query.rpc.func";
import * as _373 from "./supernode/v1/query.rpc.func";
import * as _374 from "./action/v1/query.rpc.Query";
import * as _375 from "./audit/v1/query.rpc.Query";
import * as _376 from "./claim/query.rpc.Query";
import * as _377 from "./evmigration/query.rpc.Query";
import * as _378 from "./lumeraid/query.rpc.Query";
import * as _379 from "./supernode/v1/query.rpc.Query";
import * as _380 from "./action/v1/tx.rpc.func";
import * as _381 from "./audit/v1/tx.rpc.func";
import * as _382 from "./claim/tx.rpc.func";
import * as _383 from "./erc20policy/tx.rpc.func";
import * as _384 from "./evmigration/tx.rpc.func";
import * as _385 from "./lumeraid/tx.rpc.func";
import * as _386 from "./supernode/v1/tx.rpc.func";
import * as _387 from "./action/v1/tx.rpc.msg";
import * as _388 from "./audit/v1/tx.rpc.msg";
import * as _389 from "./claim/tx.rpc.msg";
import * as _390 from "./erc20policy/tx.rpc.msg";
import * as _391 from "./evmigration/tx.rpc.msg";
import * as _392 from "./lumeraid/tx.rpc.msg";
import * as _393 from "./supernode/v1/tx.rpc.msg";
import * as _396 from "./rpc.query";
import * as _397 from "./rpc.tx";
export namespace lumera {
  export namespace action {
    export namespace module {
      export const v1 = {
        ..._175
      };
    }
    export const v1 = {
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._354,
      ..._361,
      ..._368,
      ..._374,
      ..._380,
      ..._387
    };
  }
  export namespace audit {
    export namespace module {
      export const v1 = {
        ..._184
      };
    }
    export const v1 = {
      ..._185,
      ..._186,
      ..._187,
      ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._355,
      ..._362,
      ..._369,
      ..._375,
      ..._381,
      ..._388
    };
  }
  export const claim = {
    ..._193,
    ..._194,
    ..._195,
    ..._196,
    ..._197,
    ..._356,
    ..._363,
    ..._370,
    ..._376,
    ..._382,
    ..._389
  };
  export const erc20policy = {
    ..._198,
    ..._357,
    ..._364,
    ..._383,
    ..._390
  };
  export const evmigration = {
    ..._199,
    ..._200,
    ..._201,
    ..._202,
    ..._203,
    ..._204,
    ..._358,
    ..._365,
    ..._371,
    ..._377,
    ..._384,
    ..._391
  };
  export const lumeraid = {
    ..._205,
    ..._206,
    ..._207,
    ..._208,
    ..._209,
    ..._359,
    ..._366,
    ..._372,
    ..._378,
    ..._385,
    ..._392
  };
  export namespace supernode {
    export namespace module {
      export const v1 = {
        ..._210
      };
    }
    export const v1 = {
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._215,
      ..._216,
      ..._217,
      ..._218,
      ..._219,
      ..._220,
      ..._221,
      ..._360,
      ..._367,
      ..._373,
      ..._379,
      ..._386,
      ..._393
    };
  }
  export const ClientFactory = {
    ..._396,
    ..._397
  };
}