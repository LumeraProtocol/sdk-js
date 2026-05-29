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
import * as _198 from "./lumeraid/genesis";
import * as _199 from "./lumeraid/handshake_info";
import * as _200 from "./lumeraid/params";
import * as _201 from "./lumeraid/query";
import * as _202 from "./lumeraid/tx";
import * as _203 from "./supernode/module/v1/module";
import * as _204 from "./supernode/v1/evidence";
import * as _205 from "./supernode/v1/genesis";
import * as _206 from "./supernode/v1/ip_address_history";
import * as _207 from "./supernode/v1/metrics_aggregate";
import * as _208 from "./supernode/v1/metrics";
import * as _209 from "./supernode/v1/params";
import * as _210 from "./supernode/v1/query";
import * as _211 from "./supernode/v1/super_node";
import * as _212 from "./supernode/v1/supernode_account_history";
import * as _213 from "./supernode/v1/supernode_state";
import * as _214 from "./supernode/v1/tx";
import * as _347 from "./action/v1/tx.amino";
import * as _348 from "./audit/v1/tx.amino";
import * as _349 from "./claim/tx.amino";
import * as _350 from "./lumeraid/tx.amino";
import * as _351 from "./supernode/v1/tx.amino";
import * as _352 from "./action/v1/tx.registry";
import * as _353 from "./audit/v1/tx.registry";
import * as _354 from "./claim/tx.registry";
import * as _355 from "./lumeraid/tx.registry";
import * as _356 from "./supernode/v1/tx.registry";
import * as _357 from "./action/v1/query.rpc.func";
import * as _358 from "./audit/v1/query.rpc.func";
import * as _359 from "./claim/query.rpc.func";
import * as _360 from "./lumeraid/query.rpc.func";
import * as _361 from "./supernode/v1/query.rpc.func";
import * as _362 from "./action/v1/query.rpc.Query";
import * as _363 from "./audit/v1/query.rpc.Query";
import * as _364 from "./claim/query.rpc.Query";
import * as _365 from "./lumeraid/query.rpc.Query";
import * as _366 from "./supernode/v1/query.rpc.Query";
import * as _367 from "./action/v1/tx.rpc.func";
import * as _368 from "./audit/v1/tx.rpc.func";
import * as _369 from "./claim/tx.rpc.func";
import * as _370 from "./lumeraid/tx.rpc.func";
import * as _371 from "./supernode/v1/tx.rpc.func";
import * as _372 from "./action/v1/tx.rpc.msg";
import * as _373 from "./audit/v1/tx.rpc.msg";
import * as _374 from "./claim/tx.rpc.msg";
import * as _375 from "./lumeraid/tx.rpc.msg";
import * as _376 from "./supernode/v1/tx.rpc.msg";
import * as _379 from "./rpc.query";
import * as _380 from "./rpc.tx";
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
      ..._347,
      ..._352,
      ..._357,
      ..._362,
      ..._367,
      ..._372
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
      ..._348,
      ..._353,
      ..._358,
      ..._363,
      ..._368,
      ..._373
    };
  }
  export const claim = {
    ..._193,
    ..._194,
    ..._195,
    ..._196,
    ..._197,
    ..._349,
    ..._354,
    ..._359,
    ..._364,
    ..._369,
    ..._374
  };
  export const lumeraid = {
    ..._198,
    ..._199,
    ..._200,
    ..._201,
    ..._202,
    ..._350,
    ..._355,
    ..._360,
    ..._365,
    ..._370,
    ..._375
  };
  export namespace supernode {
    export namespace module {
      export const v1 = {
        ..._203
      };
    }
    export const v1 = {
      ..._204,
      ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._351,
      ..._356,
      ..._361,
      ..._366,
      ..._371,
      ..._376
    };
  }
  export const ClientFactory = {
    ..._379,
    ..._380
  };
}