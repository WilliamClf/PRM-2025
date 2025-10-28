import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

type SidebarFormProps = {
    title: string;
    children: ReactNode;
    onSave: () => void;
}

export function SideBarForm({
    title,
    children,
    onSave
}:SidebarFormProps) {

  const navigate = useNavigate();
  const location = useLocation();

  function handleCloseForm(open: Boolean) {
    if (!open) {
      const current_path = location.pathname; // -> categories/new
      const newPath = current_path.substring(0, current_path.lastIndexOf("/")); // -> categories
      navigate(newPath);
    }
  }
  return (
    <Sheet open={true} onOpenChange={handleCloseForm}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            Preencha os campos abaixo e clique em Salvar.
          </SheetDescription>
        </SheetHeader>

        {children}

        <SheetFooter> 
          <div className="flex flex-row gap-1">
            <Button onClick={onSave}>
              Salvar
            </Button>
            <SheetClose asChild>
              <Button variant='outline'>
                Cancelar
              </Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}