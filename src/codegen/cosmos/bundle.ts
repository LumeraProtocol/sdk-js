// @ts-nocheck
/* eslint-disable */
import * as _2 from "./app/runtime/v1alpha1/module";
import * as _3 from "./app/v1alpha1/config";
import * as _4 from "./app/v1alpha1/module";
import * as _5 from "./app/v1alpha1/query";
import * as _6 from "./auth/module/v1/module";
import * as _7 from "./auth/v1beta1/auth";
import * as _8 from "./auth/v1beta1/genesis";
import * as _9 from "./auth/v1beta1/query";
import * as _10 from "./auth/v1beta1/tx";
import * as _11 from "./authz/module/v1/module";
import * as _12 from "./authz/v1beta1/authz";
import * as _13 from "./authz/v1beta1/event";
import * as _14 from "./authz/v1beta1/genesis";
import * as _15 from "./authz/v1beta1/query";
import * as _16 from "./authz/v1beta1/tx";
import * as _17 from "./autocli/v1/options";
import * as _18 from "./autocli/v1/query";
import * as _19 from "./bank/module/v1/module";
import * as _20 from "./bank/v1beta1/authz";
import * as _21 from "./bank/v1beta1/bank";
import * as _22 from "./bank/v1beta1/genesis";
import * as _23 from "./bank/v1beta1/query";
import * as _24 from "./bank/v1beta1/tx";
import * as _25 from "./base/abci/v1beta1/abci";
import * as _26 from "./base/node/v1beta1/query";
import * as _27 from "./base/query/v1beta1/pagination";
import * as _28 from "./base/reflection/v1beta1/reflection";
import * as _29 from "./base/reflection/v2alpha1/reflection";
import * as _30 from "./base/tendermint/v1beta1/query";
import * as _31 from "./base/tendermint/v1beta1/types";
import * as _32 from "./base/v1beta1/coin";
import * as _33 from "./circuit/module/v1/module";
import * as _34 from "./circuit/v1/query";
import * as _35 from "./circuit/v1/tx";
import * as _36 from "./circuit/v1/types";
import * as _37 from "./consensus/module/v1/module";
import * as _38 from "./consensus/v1/query";
import * as _39 from "./consensus/v1/tx";
import * as _40 from "./crisis/module/v1/module";
import * as _41 from "./crisis/v1beta1/genesis";
import * as _42 from "./crisis/v1beta1/tx";
import * as _43 from "./crypto/ed25519/keys";
import * as _44 from "./crypto/hd/v1/hd";
import * as _45 from "./crypto/keyring/v1/record";
import * as _46 from "./crypto/multisig/keys";
import * as _47 from "./crypto/secp256k1/keys";
import * as _48 from "./crypto/secp256r1/keys";
import * as _49 from "./distribution/module/v1/module";
import * as _50 from "./distribution/v1beta1/distribution";
import * as _51 from "./distribution/v1beta1/genesis";
import * as _52 from "./distribution/v1beta1/query";
import * as _53 from "./distribution/v1beta1/tx";
import * as _54 from "./evidence/module/v1/module";
import * as _55 from "./evidence/v1beta1/evidence";
import * as _56 from "./evidence/v1beta1/genesis";
import * as _57 from "./evidence/v1beta1/query";
import * as _58 from "./evidence/v1beta1/tx";
import * as _59 from "./feegrant/module/v1/module";
import * as _60 from "./feegrant/v1beta1/feegrant";
import * as _61 from "./feegrant/v1beta1/genesis";
import * as _62 from "./feegrant/v1beta1/query";
import * as _63 from "./feegrant/v1beta1/tx";
import * as _64 from "./genutil/module/v1/module";
import * as _65 from "./genutil/v1beta1/genesis";
import * as _66 from "./gov/module/v1/module";
import * as _67 from "./gov/v1/genesis";
import * as _68 from "./gov/v1/gov";
import * as _69 from "./gov/v1/query";
import * as _70 from "./gov/v1/tx";
import * as _71 from "./gov/v1beta1/genesis";
import * as _72 from "./gov/v1beta1/gov";
import * as _73 from "./gov/v1beta1/query";
import * as _74 from "./gov/v1beta1/tx";
import * as _75 from "./group/module/v1/module";
import * as _76 from "./group/v1/events";
import * as _77 from "./group/v1/genesis";
import * as _78 from "./group/v1/query";
import * as _79 from "./group/v1/tx";
import * as _80 from "./group/v1/types";
import * as _81 from "./mint/module/v1/module";
import * as _82 from "./mint/v1beta1/genesis";
import * as _83 from "./mint/v1beta1/mint";
import * as _84 from "./mint/v1beta1/query";
import * as _85 from "./mint/v1beta1/tx";
import * as _86 from "./msg/textual/v1/textual";
import * as _87 from "./msg/v1/msg";
import * as _88 from "./nft/module/v1/module";
import * as _89 from "./nft/v1beta1/event";
import * as _90 from "./nft/v1beta1/genesis";
import * as _91 from "./nft/v1beta1/nft";
import * as _92 from "./nft/v1beta1/query";
import * as _93 from "./nft/v1beta1/tx";
import * as _94 from "./orm/module/v1alpha1/module";
import * as _95 from "./orm/query/v1alpha1/query";
import * as _96 from "./orm/v1/orm";
import * as _97 from "./orm/v1alpha1/schema";
import * as _98 from "./params/module/v1/module";
import * as _99 from "./params/v1beta1/params";
import * as _100 from "./params/v1beta1/query";
import * as _101 from "./query/v1/query";
import * as _102 from "./reflection/v1/reflection";
import * as _103 from "./slashing/module/v1/module";
import * as _104 from "./slashing/v1beta1/genesis";
import * as _105 from "./slashing/v1beta1/query";
import * as _106 from "./slashing/v1beta1/slashing";
import * as _107 from "./slashing/v1beta1/tx";
import * as _108 from "./staking/module/v1/module";
import * as _109 from "./staking/v1beta1/authz";
import * as _110 from "./staking/v1beta1/genesis";
import * as _111 from "./staking/v1beta1/query";
import * as _112 from "./staking/v1beta1/staking";
import * as _113 from "./staking/v1beta1/tx";
import * as _114 from "./store/internal/kv/v1beta1/kv";
import * as _115 from "./store/snapshots/v1/snapshot";
import * as _116 from "./store/streaming/abci/grpc";
import * as _117 from "./store/v1beta1/commit_info";
import * as _118 from "./store/v1beta1/listening";
import * as _119 from "./tx/config/v1/config";
import * as _120 from "./tx/signing/v1beta1/signing";
import * as _121 from "./tx/v1beta1/service";
import * as _122 from "./tx/v1beta1/tx";
import * as _123 from "./upgrade/module/v1/module";
import * as _124 from "./upgrade/v1beta1/query";
import * as _125 from "./upgrade/v1beta1/tx";
import * as _126 from "./upgrade/v1beta1/upgrade";
import * as _127 from "./vesting/module/v1/module";
import * as _128 from "./vesting/v1beta1/tx";
import * as _129 from "./vesting/v1beta1/vesting";
import * as _233 from "./auth/v1beta1/tx.amino";
import * as _234 from "./authz/v1beta1/tx.amino";
import * as _235 from "./bank/v1beta1/tx.amino";
import * as _236 from "./circuit/v1/tx.amino";
import * as _237 from "./consensus/v1/tx.amino";
import * as _238 from "./crisis/v1beta1/tx.amino";
import * as _239 from "./distribution/v1beta1/tx.amino";
import * as _240 from "./evidence/v1beta1/tx.amino";
import * as _241 from "./feegrant/v1beta1/tx.amino";
import * as _242 from "./gov/v1/tx.amino";
import * as _243 from "./gov/v1beta1/tx.amino";
import * as _244 from "./group/v1/tx.amino";
import * as _245 from "./mint/v1beta1/tx.amino";
import * as _246 from "./nft/v1beta1/tx.amino";
import * as _247 from "./slashing/v1beta1/tx.amino";
import * as _248 from "./staking/v1beta1/tx.amino";
import * as _249 from "./upgrade/v1beta1/tx.amino";
import * as _250 from "./vesting/v1beta1/tx.amino";
import * as _251 from "./auth/v1beta1/tx.registry";
import * as _252 from "./authz/v1beta1/tx.registry";
import * as _253 from "./bank/v1beta1/tx.registry";
import * as _254 from "./circuit/v1/tx.registry";
import * as _255 from "./consensus/v1/tx.registry";
import * as _256 from "./crisis/v1beta1/tx.registry";
import * as _257 from "./distribution/v1beta1/tx.registry";
import * as _258 from "./evidence/v1beta1/tx.registry";
import * as _259 from "./feegrant/v1beta1/tx.registry";
import * as _260 from "./gov/v1/tx.registry";
import * as _261 from "./gov/v1beta1/tx.registry";
import * as _262 from "./group/v1/tx.registry";
import * as _263 from "./mint/v1beta1/tx.registry";
import * as _264 from "./nft/v1beta1/tx.registry";
import * as _265 from "./slashing/v1beta1/tx.registry";
import * as _266 from "./staking/v1beta1/tx.registry";
import * as _267 from "./upgrade/v1beta1/tx.registry";
import * as _268 from "./vesting/v1beta1/tx.registry";
import * as _269 from "./app/v1alpha1/query.rpc.func";
import * as _270 from "./auth/v1beta1/query.rpc.func";
import * as _271 from "./authz/v1beta1/query.rpc.func";
import * as _272 from "./autocli/v1/query.rpc.func";
import * as _273 from "./bank/v1beta1/query.rpc.func";
import * as _274 from "./base/node/v1beta1/query.rpc.func";
import * as _275 from "./base/reflection/v1beta1/reflection.rpc.func";
import * as _276 from "./base/reflection/v2alpha1/reflection.rpc.func";
import * as _277 from "./base/tendermint/v1beta1/query.rpc.func";
import * as _278 from "./circuit/v1/query.rpc.func";
import * as _279 from "./consensus/v1/query.rpc.func";
import * as _280 from "./distribution/v1beta1/query.rpc.func";
import * as _281 from "./evidence/v1beta1/query.rpc.func";
import * as _282 from "./feegrant/v1beta1/query.rpc.func";
import * as _283 from "./gov/v1/query.rpc.func";
import * as _284 from "./gov/v1beta1/query.rpc.func";
import * as _285 from "./group/v1/query.rpc.func";
import * as _286 from "./mint/v1beta1/query.rpc.func";
import * as _287 from "./nft/v1beta1/query.rpc.func";
import * as _288 from "./orm/query/v1alpha1/query.rpc.func";
import * as _289 from "./params/v1beta1/query.rpc.func";
import * as _290 from "./reflection/v1/reflection.rpc.func";
import * as _291 from "./slashing/v1beta1/query.rpc.func";
import * as _292 from "./staking/v1beta1/query.rpc.func";
import * as _293 from "./tx/v1beta1/service.rpc.func";
import * as _294 from "./upgrade/v1beta1/query.rpc.func";
import * as _295 from "./app/v1alpha1/query.rpc.Query";
import * as _296 from "./auth/v1beta1/query.rpc.Query";
import * as _297 from "./authz/v1beta1/query.rpc.Query";
import * as _298 from "./autocli/v1/query.rpc.Query";
import * as _299 from "./bank/v1beta1/query.rpc.Query";
import * as _300 from "./base/node/v1beta1/query.rpc.Service";
import * as _301 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _302 from "./circuit/v1/query.rpc.Query";
import * as _303 from "./consensus/v1/query.rpc.Query";
import * as _304 from "./distribution/v1beta1/query.rpc.Query";
import * as _305 from "./evidence/v1beta1/query.rpc.Query";
import * as _306 from "./feegrant/v1beta1/query.rpc.Query";
import * as _307 from "./gov/v1/query.rpc.Query";
import * as _308 from "./gov/v1beta1/query.rpc.Query";
import * as _309 from "./group/v1/query.rpc.Query";
import * as _310 from "./mint/v1beta1/query.rpc.Query";
import * as _311 from "./nft/v1beta1/query.rpc.Query";
import * as _312 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _313 from "./params/v1beta1/query.rpc.Query";
import * as _314 from "./slashing/v1beta1/query.rpc.Query";
import * as _315 from "./staking/v1beta1/query.rpc.Query";
import * as _316 from "./tx/v1beta1/service.rpc.Service";
import * as _317 from "./upgrade/v1beta1/query.rpc.Query";
import * as _318 from "./auth/v1beta1/tx.rpc.func";
import * as _319 from "./authz/v1beta1/tx.rpc.func";
import * as _320 from "./bank/v1beta1/tx.rpc.func";
import * as _321 from "./circuit/v1/tx.rpc.func";
import * as _322 from "./consensus/v1/tx.rpc.func";
import * as _323 from "./crisis/v1beta1/tx.rpc.func";
import * as _324 from "./distribution/v1beta1/tx.rpc.func";
import * as _325 from "./evidence/v1beta1/tx.rpc.func";
import * as _326 from "./feegrant/v1beta1/tx.rpc.func";
import * as _327 from "./gov/v1/tx.rpc.func";
import * as _328 from "./gov/v1beta1/tx.rpc.func";
import * as _329 from "./group/v1/tx.rpc.func";
import * as _330 from "./mint/v1beta1/tx.rpc.func";
import * as _331 from "./nft/v1beta1/tx.rpc.func";
import * as _332 from "./slashing/v1beta1/tx.rpc.func";
import * as _333 from "./staking/v1beta1/tx.rpc.func";
import * as _334 from "./upgrade/v1beta1/tx.rpc.func";
import * as _335 from "./vesting/v1beta1/tx.rpc.func";
import * as _336 from "./auth/v1beta1/tx.rpc.msg";
import * as _337 from "./authz/v1beta1/tx.rpc.msg";
import * as _338 from "./bank/v1beta1/tx.rpc.msg";
import * as _339 from "./circuit/v1/tx.rpc.msg";
import * as _340 from "./consensus/v1/tx.rpc.msg";
import * as _341 from "./crisis/v1beta1/tx.rpc.msg";
import * as _342 from "./distribution/v1beta1/tx.rpc.msg";
import * as _343 from "./evidence/v1beta1/tx.rpc.msg";
import * as _344 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _345 from "./gov/v1/tx.rpc.msg";
import * as _346 from "./gov/v1beta1/tx.rpc.msg";
import * as _347 from "./group/v1/tx.rpc.msg";
import * as _348 from "./mint/v1beta1/tx.rpc.msg";
import * as _349 from "./nft/v1beta1/tx.rpc.msg";
import * as _350 from "./slashing/v1beta1/tx.rpc.msg";
import * as _351 from "./staking/v1beta1/tx.rpc.msg";
import * as _352 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _353 from "./vesting/v1beta1/tx.rpc.msg";
import * as _394 from "./rpc.query";
import * as _395 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._2
      };
    }
    export const v1alpha1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._269,
      ..._295
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._6
      };
    }
    export const v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._233,
      ..._251,
      ..._270,
      ..._296,
      ..._318,
      ..._336
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._11
      };
    }
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._234,
      ..._252,
      ..._271,
      ..._297,
      ..._319,
      ..._337
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._17,
      ..._18,
      ..._272,
      ..._298
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._19
      };
    }
    export const v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._235,
      ..._253,
      ..._273,
      ..._299,
      ..._320,
      ..._338
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._25
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._26,
        ..._274,
        ..._300
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._27
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._28,
        ..._275
      };
      export const v2alpha1 = {
        ..._29,
        ..._276
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._30,
        ..._31,
        ..._277,
        ..._301
      };
    }
    export const v1beta1 = {
      ..._32
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._33
      };
    }
    export const v1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._236,
      ..._254,
      ..._278,
      ..._302,
      ..._321,
      ..._339
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._37
      };
    }
    export const v1 = {
      ..._38,
      ..._39,
      ..._237,
      ..._255,
      ..._279,
      ..._303,
      ..._322,
      ..._340
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._40
      };
    }
    export const v1beta1 = {
      ..._41,
      ..._42,
      ..._238,
      ..._256,
      ..._323,
      ..._341
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._43
    };
    export namespace hd {
      export const v1 = {
        ..._44
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._45
      };
    }
    export const multisig = {
      ..._46
    };
    export const secp256k1 = {
      ..._47
    };
    export const secp256r1 = {
      ..._48
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._49
      };
    }
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._239,
      ..._257,
      ..._280,
      ..._304,
      ..._324,
      ..._342
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._54
      };
    }
    export const v1beta1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._240,
      ..._258,
      ..._281,
      ..._305,
      ..._325,
      ..._343
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._59
      };
    }
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._241,
      ..._259,
      ..._282,
      ..._306,
      ..._326,
      ..._344
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._64
      };
    }
    export const v1beta1 = {
      ..._65
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._66
      };
    }
    export const v1 = {
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._242,
      ..._260,
      ..._283,
      ..._307,
      ..._327,
      ..._345
    };
    export const v1beta1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._243,
      ..._261,
      ..._284,
      ..._308,
      ..._328,
      ..._346
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._75
      };
    }
    export const v1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._244,
      ..._262,
      ..._285,
      ..._309,
      ..._329,
      ..._347
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._81
      };
    }
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._245,
      ..._263,
      ..._286,
      ..._310,
      ..._330,
      ..._348
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._86
      };
    }
    export const v1 = {
      ..._87
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._88
      };
    }
    export const v1beta1 = {
      ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._246,
      ..._264,
      ..._287,
      ..._311,
      ..._331,
      ..._349
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._94
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._95,
        ..._288,
        ..._312
      };
    }
    export const v1 = {
      ..._96
    };
    export const v1alpha1 = {
      ..._97
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._98
      };
    }
    export const v1beta1 = {
      ..._99,
      ..._100,
      ..._289,
      ..._313
    };
  }
  export namespace query {
    export const v1 = {
      ..._101
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._102,
      ..._290
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._103
      };
    }
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._247,
      ..._265,
      ..._291,
      ..._314,
      ..._332,
      ..._350
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._108
      };
    }
    export const v1beta1 = {
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._248,
      ..._266,
      ..._292,
      ..._315,
      ..._333,
      ..._351
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._114
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._115
      };
    }
    export namespace streaming {
      export const abci = {
        ..._116
      };
    }
    export const v1beta1 = {
      ..._117,
      ..._118
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._119
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._120
      };
    }
    export const v1beta1 = {
      ..._121,
      ..._122,
      ..._293,
      ..._316
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._123
      };
    }
    export const v1beta1 = {
      ..._124,
      ..._125,
      ..._126,
      ..._249,
      ..._267,
      ..._294,
      ..._317,
      ..._334,
      ..._352
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._127
      };
    }
    export const v1beta1 = {
      ..._128,
      ..._129,
      ..._250,
      ..._268,
      ..._335,
      ..._353
    };
  }
  export const ClientFactory = {
    ..._394,
    ..._395
  };
}