import { Siren, CircleCheck, XCircle } from "lucide-react";

const correctExamples: string[] = [
  "Atap bocor di kamar lantai 2.",
  "Gagang pintu tidak rapat pada kedua kamar.",
  "Genteng di ruang tamu bocor, menyebabkan air menetes dekat lampu plafon.",
  "Air tidak mengalir di blok B.",
];

const wrongExamples: { title: string; subtitle: string }[] = [
  {
    title: "Dinding retak.",
    subtitle: "Tidak ada informasi spesifik.",
  },
  {
    title: "Ada kebocoran.",
    subtitle: "Terlalu umum dan tidak jelas.",
  },
  {
    title: "Keramik rusak.",
    subtitle: "Tidak menyebutkan lokasi atau kondisi detail.",
  },
];

export function FeedbackTips() {
  return (
    <div className="border border-[#FA9500] rounded-lg p-4">
      <div className="flex items-center gap-2">
        <Siren size={24} color="#FA9500" />
        <span className="text-sm text-[#FA9500] font-semibold">
          Tips Mengisi Feedback
        </span>
      </div>
      <p className="text-sm text-foreground mt-2">
        Untuk mempermudah kami memahami dan mempercepat proses penanganan
        feedback Anda, berikut tips saat menuliskannya
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="border rounded-md space-y-2 bg-muted/50 p-4">
          <h5 className="text-primary text-sm font-medium">
            Contoh yang benar
          </h5>
          <ul className="space-y-2">
            {correctExamples.map((correctItem, correctIdx) => (
              <li key={`${correctItem}-${correctIdx}`}>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg leading-none text-foreground">
                      {"\u2022"}
                    </span>
                    <p className="text-sm">
                      {"\u201C"}
                      {correctItem}
                      {"\u201D"}
                    </p>
                  </div>
                  <div>
                    <CircleCheck size={16} color="#FFFFFF" fill="#287C3E" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="border rounded-md space-y-2 bg-muted/50 p-4">
          <h5 className="text-[#EF4444] text-sm font-medium">
            Contoh yang salah
          </h5>
          <ul className="space-y-2">
            {wrongExamples.map((wrongItem, wrongIdx) => (
              <li key={`${wrongItem.title}-${wrongIdx}`}>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-lg leading-none text-foreground">
                        {"\u2022"}
                      </span>
                      <p className="text-sm">
                        {"\u201C"}
                        {wrongItem.title}
                        {"\u201D"}
                      </p>
                      <p className="text-sm text-[#71717A]">
                        {"\u0028"}
                        {wrongItem.subtitle}
                        {"\u0029"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <XCircle size={16} color="#FFFFFF" fill="#EF4444" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
