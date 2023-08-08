import { FC } from "react";
import Image from "next/image";

import routes from "../util/routes";
import { Button, NavItem } from "../components";
import { Xlogo } from "../components/Xlogo";

export const SideLeftNavBar: FC = () => {
  return (
    <main>
      <Xlogo className="w-[100px] h-[100px] cursor-pointer hover:bg-[#181818] rounded-full" />
      <section className="flex flex-col gap-2">
        {routes.map((route) => (
          <NavItem
            key={route.href}
            Icon={route.icon}
            href={route.href}
            label={route.title}
          />
        ))}

        <Button className="w-9/12 mt-4" label="Publicar" />
      </section>
    </main>
  );
};
