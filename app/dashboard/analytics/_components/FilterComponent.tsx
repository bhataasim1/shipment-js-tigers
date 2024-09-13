import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FilterComponent() {
  return (
    <div className="flex items-center space-x-10 bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="">Type</label>
          <Select>
            <SelectTrigger className="w-[200px] rounded-3xl">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="">Date</label>
          <Select>
            <SelectTrigger className="w-[200px] rounded-3xl">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Today">Today</SelectItem>
              <SelectItem value="Tomorrow">Tomorrow</SelectItem>
              <SelectItem value="Yesterday">Yesterday</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="">Period</label>
          <Select>
            <SelectTrigger className="w-[200px] rounded-3xl">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Daily">Daily</SelectItem>
              <SelectItem value="Weekly">Weekly</SelectItem>
              <SelectItem value="Monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex space-x-2">
        <Button variant={"outline"} className="rounded-3xl text-[#6B120A]">Cancel</Button>
        <Button className="bg-[#6B120A] hover:bg-[#6B120A] rounded-3xl">Go</Button>
      </div>
    </div>
  );
}
