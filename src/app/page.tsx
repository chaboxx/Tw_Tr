/* eslint-disable import/no-unresolved */
import { BiSolidHomeCircle } from "react-icons/bi";
import { FaFeatherAlt } from "react-icons/fa";

import { Post } from "../views";

import {
  Avatar,
  Button,
  NavItem,
  SectionLink,
  TextArea,
  SearchBar,
  Banner,
  UserTitle,
  UserTag,
} from "@/shared/components";

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
      <TextArea />
      <br />
      <SectionLink label="Para ti" />
      <br />
      <SearchBar />
      <br />
      <Banner />
      <br />
      {/* <UserTitle href="/test" title="El Programador Senior" /> */}
      <UserTitle
        title="El Programador Senior"
        titleStyle={{ pointerEvents: "none", textDecoration: "none" }}
      />
      {/* <br />
      <UserTitle href="/test" title="El Programador Senior" /> */}
      <br />

      <UserTag tag="@chaboxxsama" />
      <br />

      <Post />
    </div>
  );
}
