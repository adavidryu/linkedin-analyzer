import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Card>
            <CardHeader>
            <CardTitle className="text-xl font-bold">Analyze a LinkedIn Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
            <div className="flex gap-2">
                <Input placeholder="https://www.linkedin.com/in/example" />
                <Button>Analyze</Button>
            </div>

            {/* You can conditionally render this after API returns result */}
            <div className="mt-6 space-y-2">
                <h3 className="text-lg font-semibold">AI Summary:</h3>
                <p className="text-sm text-muted-foreground">
                Jane Doe is a senior researcher at OpenAI working on large language models...
                </p>

                <h4 className="font-medium mt-4">Key Highlights:</h4>
                <ul className="list-disc list-inside text-sm">
                <li>PhD from Stanford in NLP</li>
                <li>Previously at Google Brain</li>
                <li>Published 5+ papers in ML</li>
                </ul>
            </div>
            <div className="flex gap-2 justify-end">
                <Button variant="default">Save</Button>
                <Button variant="outline">Share</Button>
            </div>
            </CardContent>
      </Card>
      </div>
    )
  }