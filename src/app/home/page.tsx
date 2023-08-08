import { MainLayout } from "@/shared/layout/MainLayout";
import { SideLeftNavBar, Home, RigthPanel } from "@/shared/views";

export default function pagePage() {
  return (
    <MainLayout>
      <SideLeftNavBar />
      <Home />
      <RigthPanel />
    </MainLayout>
  );
}
