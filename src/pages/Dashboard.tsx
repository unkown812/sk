import React, { useEffect, useState } from "react";
import { Users, CreditCard, Loader } from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import RecentFeePayments from "../components/dashboard/RecentFeePayments";
import UpcomingExams from "../components/dashboard/UpcomingExams";
import { studentService } from "../services/studentService";
import supabase from "../lib/supabase";
import DueDateReminder from "../components/dashboard/DueDateReminder";
import BirthdayReminder from "../components/dashboard/BirthdayReminder";

const Dashboard: React.FC = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalFeesCollected, setTotalFeesCollected] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const students = await studentService.getAll();
        setTotalStudents(students.length);

        const { data: studentsData, error } = await supabase
          .from("students")
          .select("total_fee, paid_fee");

        if (error) throw error;

        if (studentsData && studentsData.length > 0) {
          const totalFeesCollected = studentsData.reduce(
            (sum: number, student: any) => sum + (student.total_fee || 0),
            0
          );
          setTotalFeesCollected(totalFeesCollected);
        } else {
          setTotalFeesCollected(0);
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader className="mx-auto h-12 w-12 animate-spin text-primary" />
          <p className="mt-4 text-lg text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-500">
      <div className="animate-in slide-in-from-top-4 duration-700">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of SK Tutorials management system
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 animate-in slide-in-from-bottom-4 duration-700 delay-200">
        <StatCard
          title="Total Students"
          value={totalStudents}
          change={+1}
          icon={<Users className="size-10" />}
          color="text-blue-800"
          bgcolor="bg-blue-50"
        />
        <StatCard
          title="Fee Collection"
          value={`₹${totalFeesCollected.toLocaleString()}`}
          change={+8.2}
          icon={<CreditCard className="size-10" />}
          color="text-green-800"
          bgcolor="bg-green-50"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="card overflow-hidden">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Recent Fee Payments
            </h2>
            <RecentFeePayments />
          </div>

          <div className="card">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Upcoming Exams
            </h2>
            <UpcomingExams />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-1">
          <div className="card">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Due Date Reminders
            </h2>
            <DueDateReminder />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-1">
          <div className="card">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Birthday Reminders
            </h2>
            <BirthdayReminder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
