/* eslint-disable import/no-unresolved */
import { BiSolidHomeCircle } from "react-icons/bi";
import { FaFeatherAlt } from "react-icons/fa";

import { Avatar } from "@/shared/components/Avatar";
import { NavItem } from "@/shared/components/NavItem";
import { Button } from "@/shared/components/Button";

export default function Home() {
  return (
    <div className="container">
      <NavItem
        areThereNewRequests
        Icon={<BiSolidHomeCircle size={20} />}
        href="/"
        label="Inicio"
      />
      <Button Icon={<FaFeatherAlt size={22} />} label="Twittear" />
      <Avatar height={25} href="/test" imageUri="/avatar.jpg" width={25} />
    </div>
  );
}
