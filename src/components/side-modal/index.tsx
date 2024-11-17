import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export function SideModalComponent({ open, onOpenChange, title, description, children }: { open: boolean, onOpenChange: (open: boolean) => void, title: string, description: string, children: React.ReactNode }) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange} >
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            {description}
          </SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  )
}
