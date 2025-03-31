
import StudentFormSection from "./forms/StudentFormSection";
import AdminFormSection from "./forms/AdminFormSection";

const StudentAdminSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <StudentFormSection />
      <AdminFormSection />
    </div>
  );
};

export default StudentAdminSection;
