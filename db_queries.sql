-- Function to update paid_fees based on installment_amt array
CREATE OR REPLACE FUNCTION public.update_student_paid_fees()
RETURNS TRIGGER AS $$
BEGIN
    -- Calculate the sum of installment amounts
    NEW.paid_fees = COALESCE(array_sum(NEW.installment_amt), 0);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS "update_paid_fees" ON "public"."students";

-- Create new trigger
CREATE TRIGGER "update_paid_fees"
BEFORE UPDATE 
ON "public"."students"
FOR EACH ROW
WHEN (NEW.installment_amt IS DISTINCT FROM OLD.installment_amt)
EXECUTE FUNCTION public.update_student_paid_fees();