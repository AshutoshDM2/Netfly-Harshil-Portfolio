import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import CustomButton from "../CustomButton/CustomButton";

const ShowSuccess = ({
  isOpen,
  handleClose
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="w-[95vw] max-w-md mx-auto bg-white border border-zinc-400/60">
                <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="mb-4 p-3 rounded-full bg-green-100 dark:bg-green-900/20">
                        <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 " />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-black tracking-wide">
                        Message Sent Successfully!
                    </h3>
                    <p className="text-base tracking-wide font-semibold text-zinc-400 mb-4">
                        Your message has been sent successfully. I will get
                        back to you shortly.
                    </p>
                    <CustomButton
                        label="Close"
                        variant="outline"
                        size="lg"
                        onClick={handleClose}   
                        className="w-40 text-base bg-black hover:opacity-95 text-white"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ShowSuccess;