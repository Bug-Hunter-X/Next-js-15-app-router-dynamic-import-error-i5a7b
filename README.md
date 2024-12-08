# Next.js 15 App Router Dynamic Import Error

This repository demonstrates a bug in Next.js 15's App Router when using dynamic imports within components. The bug causes an error when the component is rendered.

## Bug

The bug occurs when a module containing a dynamic import is imported into a component.  The error message is not very helpful and can be difficult to debug. 

## Solution

The solution involves restructuring the code to avoid dynamic imports within the component or using a different module federation approach.