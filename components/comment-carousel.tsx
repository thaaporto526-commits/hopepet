import Image from "next/image";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export interface Comment {
  id: number;
  text: string;
  name: string;
  role: string;
  image: string;
}

type CommentsCarouselProps = {
  comments: Array<Comment>
}

export default function CommentCarousel({ comments }: CommentsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const activeComment = comments[currentIndex];

  const nextComment = () => {
    if (currentIndex === comments.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1) 
    }
  };

  const prevComment = () => { 
    if (currentIndex === 0) {
      setCurrentIndex(comments.length - 1) 
    } else {
      setCurrentIndex(currentIndex - 1) 
    }
  }

  return (
    <Card className="relative p-8 sm:p-12">
      <Quote className="absolute left-6 top-6 w-12 h-12 text-primary/20" />

      <CardContent>
        <p className="text-lg sm:text-xl text-card-foreground text-pretty leading-relaxed mb-8">
          {activeComment.text}
        </p>

        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden">
            <Image
              src={activeComment.image}
              alt="Commenter profie picture"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="font-semibold text-card-foreground">
              {activeComment.name}
            </p>

            <p className="text-sm text-muted-foreground">
              {activeComment.role}
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-border">
        <div className="flex gap-2">
          {comments.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para o depoimento ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-primary w-4"
                  : "bg-primary/20 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="icon" aria-label="Depoimento anterior" onClick={prevComment} >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button variant="outline" size="icon" aria-label="Próximo depoimento" onClick={nextComment}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}