import * as React from "react"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <label className="text-lg font-medium">{props.name}</label>
        <textarea className="flex min-h-[200px] min-w-[300px] w-full rounded-md border border-input bg-gray-300 px-3 py-2 text-lg shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" ref={ref}{...props} />
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
