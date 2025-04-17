import { MessageSquare } from "lucide-react";

import { feedbackNumbers } from "../libs/constants";

import { Button } from "@workspace/ui/components/button";
import ChatBubbleLeftRightIcon from "@/assets/icons/chat-bubble-left-right-icon.svg";

export function FeedbackReminder() {
  return (
    <div className="border border-primary rounded-lg bg-white space-y-5 px-4 py-[26px]">
      <div className="flex items-center gap-2">
        <ChatBubbleLeftRightIcon />
        <h1 className="text-foreground text-lg font-semibold">
          Jangan Lupa Untuk Memberi Ulasan!
        </h1>
      </div>
      <p className="text-sm text-muted-foreground">
        Sepertinya Anda belum memberikan ulasan untuk Feedback yang sudah
        selesai di bawah ini
      </p>
      <div className="flex items-center gap-2">
        {feedbackNumbers.map((feedbackNumber, feedbackIdx) => (
          <Button
            key={`${feedbackNumber}-${feedbackIdx}`}
            className="text-sm h-auto py-2 !px-4"
          >
            <MessageSquare /> {feedbackNumber}
          </Button>
        ))}
      </div>
    </div>
  );
}
