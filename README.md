## Status
Incomplete; abandoned. Replaced by [attempt 01](https://github.com/Alex-Symonds/portfolio-01).
    
## Project goals
Produce a static website to show off my projects to potential employers which:
- Had personality
- Involved some interesting CSS
    
## How to navigate this project
- Responsive lined notepaper CSS: [code](https://github.com/Alex-Symonds/portfolio-00/blob/4990be963707298fd9398975aa5205ef4744e434/scss/main.scss#L210), [appearance](https://alex-symonds.github.io/doodles/projects).
    - Headings/paragraphs on cards stay on the lines even as the page is resized

## Why I made it this way
#### Code
- Used React for the nav bar because:
    - I read in Jakob Nielsen's blog that a webpage should never link to itself. While I *could* have done that manually for such a small website, instead I decided it sounded like a job for React, because...
    - React was my new shiny thing at the time
    
#### Design
Being a fan of MMORPGs and power metal, I decided my portfolio site's theme would be "battling the forces of evil", where in this case the forces of evil would be web development problems that could conceivably be mitigated by hiring a junior. A junior like me!

I decided to express this idea via silly sketchy doodles that look like they're drawn on a notepad while someone's mind is wandering: I figured I could create some SVGs of silly sketchy doodles myself and I thought the notepaper and sketchiness might make an interesting CSS challenge.

## Reason for abandonment
The design. 

Part way through, I realised I'd been so focused on implementation, I hadn't taken a moment to sit back and consider *whether I liked the overall effect*.

- Design didn't really come together
- On desktop, using the correct proportions for A4 enhanced the notepaper effect, but also caused acres of empty space at the sides with nothing in particular to go there
- Home page was too spartan; projects page was too busy
- Kept wavering on whether I liked the lined paper and the scribbley borders *at all*. It's rather loud and it doesn't look like a "normal" website, which maybe isn't such a great thing for a junior's portfolio site
- Disliked how the screenshots of projects and the programming icons looked on the projects page: they take you out of the doodliness.
    - My idea of making the screenies look like pictures that'd been cut out and glued on (via a thick white border and a shadow) didn't work out as I'd hoped
        
## Things I would do differently, if I ever revisited the project
- Complete the website by adding the planned "About" and "Contact" pages (or a combined About & Contact page, removing a nav link in the process)
- Ditch React. It's silly to make users download 1MB of JS just to save myself copy/pasting a header across 3-4 pages and swapping some HTML tags
- Either remove the doodle animations on the home page or go all-in and make something far more elaborate. If kept, the animations should be accessible via keyboard and touchscreen, rather than limited to a `:hover` effect
- Refactor the CSS for the project cards to make better use of CSS variables
- The screenshots on the projects page are bitmappy and so don't resize nicely: why I ever thought it'd be a good idea to have them resizing with the container...
- Improvements to the design
    - See if there's a way to bring everything together
    - Come up with *something* for the acres of grey space at the sides on desktop, such as:
        - Attempt some CSS art, e.g. make it look like the paper is on a desk, accompanied by a pen and a tea mug and maybe other bits and bobs
        - Other sheets of paper sticking out a bit, or perhaps "loose" on the desk
    - More detail on homepage (more doodles; extra unrelated doodles around the edges; some notes being "interrupted" by the doodles, etc.)
    - Make scribbly versions of all logos/icons, so they blend in with the overall look of the page
    - Consider other ways in which screenshots could be "stuck on" to a sheet of notepaper and use CSS to suggest that, e.g. tape, paperclips, tucking the corners into slits in the paper, etc.
