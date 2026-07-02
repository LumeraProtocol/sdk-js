// @ts-nocheck
/* eslint-disable */
import { MsgUpdateParams, MsgClaimLegacyAccount, MsgMigrateValidator } from "./tx";
export const AminoConverter = {
  "/lumera.evmigration.MsgUpdateParams": {
    aminoType: "lumera/x/evmigration/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/lumera.evmigration.MsgClaimLegacyAccount": {
    aminoType: "/lumera.evmigration.MsgClaimLegacyAccount",
    toAmino: MsgClaimLegacyAccount.toAmino,
    fromAmino: MsgClaimLegacyAccount.fromAmino
  },
  "/lumera.evmigration.MsgMigrateValidator": {
    aminoType: "/lumera.evmigration.MsgMigrateValidator",
    toAmino: MsgMigrateValidator.toAmino,
    fromAmino: MsgMigrateValidator.fromAmino
  }
};