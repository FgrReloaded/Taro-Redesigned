import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Star, ThumbsDown, ThumbsUp } from "lucide-react"
import { Jost, Open_Sans } from "next/font/google"
import { useState } from "react"

const jost = Jost({ subsets: ['latin'], weight: ["400", "600", "800"] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ["400", "700"] })


const reviews = [
  { id: 1, user: "Alex Johnson", rating: 5, comment: "This course is a game-changer! The advanced patterns taught here have significantly improved my React skills.", helpful: 24, notHelpful: 2 },
  { id: 2, user: "Sam Lee", rating: 4, comment: "Great content, but some sections could use more practical examples. Overall, very informative.", helpful: 18, notHelpful: 3 },
  { id: 3, user: "Taylor Swift", rating: 5, comment: "Jane's teaching style is excellent. The course structure makes complex topics easy to understand.", helpful: 31, notHelpful: 1 },
]

// @ts-expect-error-ignore
const ReviewCard = ({ review }) => (
  <Card className="p-4 mb-4 bg-fuchsia-50">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 flex items-center justify-center text-white font-bold mr-3">
          {review.user.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-violet-800" style={jost.style}>{review.user}</h4>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <button className="flex items-center hover:text-violet-600">
          <ThumbsUp className="w-4 h-4 mr-1" />
          {review.helpful}
        </button>
        <button className="flex items-center hover:text-violet-600">
          <ThumbsDown className="w-4 h-4 mr-1" />
          {review.notHelpful}
        </button>
      </div>
    </div>
    <p className="text-gray-700" style={openSans.style}>{review.comment}</p>
  </Card>
)

export default function Review() {
  const [newReview, setNewReview] = useState("")
  const [newRating, setNewRating] = useState(0)

  const handleSubmitReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Submitting review:", { rating: newRating, comment: newReview })
    setNewReview("")
    setNewRating(0)
  }
  return (
    <Card className="p-6 mt-4">
      <h3 className="text-2xl font-semibold text-violet-800 mb-4" style={jost.style}>Student Reviews</h3>
      <div className="mb-6">
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <div>
        <Separator className="my-2  bg-violet-800" />
        <h4 className="text-xl font-semibold text-violet-800 mb-4" style={jost.style}>Write a Review</h4>
        <form onSubmit={handleSubmitReview} style={openSans.style}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating</label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewRating(star)}
                  className={`${star <= newRating ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400`}
                >
                  <Star className="w-8 h-8" />
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
            <Textarea
              id="review"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Write your review here..."
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-violet-500 focus:border-violet-500"
            />
          </div>
          <Button  type="submit" className="bg-gradient-to-r font-bold from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white">
            Submit Review
          </Button>
        </form>
      </div>
    </Card>
  )
}