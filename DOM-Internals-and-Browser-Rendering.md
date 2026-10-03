# DOM Internals & Browser Rendering

> Web Development Session — Utkarsh

---

# 1. What is DOM?

DOM stands for **Document Object Model**.

When a browser receives an HTML document, it does not simply keep the HTML as plain text.

The browser parses the HTML and creates an **in-memory object representation** of that document.

That representation is called the **DOM**.

```text
HTML Source
     |
     | HTML Parsing
     v
   DOM Tree
     |
     v
JavaScript can interact with it