import React, { FC, SVGProps } from "react";
import LogoBase from "../LogoBase/LogoBase";
import { LogoBaseProps } from "../LogoBase/LogoBase.types";


import poster from "../../../assets/background/zhero.png";

const CustomLogo: FC<SVGProps<any> & LogoBaseProps> = ({ inverse, onClick }) => {
  
 return (
    <img
      src={poster}
      alt="MyCompany Logo"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default", width: 200, height: 55 }}
    />
  );
};

export default CustomLogo;