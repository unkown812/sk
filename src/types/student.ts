export interface Student {
  id?: number;
  name: string;
  category: string;
  course: string;
  year: number;
  semester: number | null;
  email: string;
  phone: string;
  enrollment_date: string;
  created_at: string;
  fee_status: string;
  total_fee: number | null;
  paid_fee: number | null;
  due_amount: number | null;
  last_payment: string;
  birthday: string;
  installment_amt: number[];
  installments: number | null;
  installment_dates?: string[];
  installment_descriptions?: string[];
  enrollment_year: number[];
  subjects_enrolled: string[];
  due_dates?: string[];
}
