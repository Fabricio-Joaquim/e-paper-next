import { Checkbox } from "@/components/ui/checkbox"

interface CheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export default function CheckboxComponent({ checked, onCheckedChange }: CheckboxProps) {
  return <Checkbox checked={checked} onCheckedChange={onCheckedChange} className="border-input bg-background" />
}
