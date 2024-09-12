import { Icons } from "@/components/common/Icons";

export default function Announcement() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4">Announcements</h3>
      <p>Soon you will see latest announcements/new in this section.</p>
      
      {/* Centered Icon Section */}
      <div className="text-center mt-10">
        <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          <Icons.announcementIcon />
        </div>
      </div>
    </div>
  );
}
