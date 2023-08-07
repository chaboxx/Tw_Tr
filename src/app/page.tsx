/* eslint-disable import/no-unresolved */
import { BiSolidHomeCircle } from "react-icons/bi";
import { FaFeatherAlt } from "react-icons/fa";

import { Post } from "../views";
import { Panel, Title, Footer, Row } from "../components/RigthSidePanel";

import {
  Avatar,
  Button,
  NavItem,
  SectionLink,
  TextArea,
  SearchBar,
  Banner,
  UserTitle,
  SecondaryText,
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

      <SecondaryText tag="@chaboxxsama" />
      <br />

      <Post />
      <br />

      <Panel>
        <Title className="px-4 py-3">Hola Mundo</Title>
        <Row category="Tecnologia" className="px-4" numberPosts={100} title="React" />
        <Footer className="px-4 py-3" />
      </Panel>

      <br />
      <Panel>
        <Title className="px-4 mb-2 pt-3">Hola Mundo</Title>
        <Row
          category="Tecnologia"
          className="pb-3 px-4"
          numberPosts={100}
          title="React"
        />
      </Panel>
      <br />

      <Panel className="p-4">
        <Title className="mb-2">Hola Mundo</Title>
        <Title className="mb-2 text-sm font-semibold">
          Suscríbete para desbloquear nuevas funciones.
        </Title>
        <Button
          Icon={<FaFeatherAlt size={22} />}
          className="py-2"
          label="Obtener Verificacion"
        />
      </Panel>
    </div>
  );
}
