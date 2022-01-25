import React from "react";
import "./nbmHPCom.css";
import { HpFlesh } from "../nbmHpFlesh/nbmHpFlesh";
import { HpRec } from "../nbmHpRec/nbmHpRec";
import { BarSub } from "../nbmBarSub/nbmBarSub";

export const HPContent = () => {
  return (
    <div>
      <BarSub />
      <HpFlesh />
      <HpRec />
    </div>
  );
};
