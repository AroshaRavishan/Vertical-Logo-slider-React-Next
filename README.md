# Logo Component

## Overview

The `Logo` component displays a carousel of logos from various partners using the `@splidejs/react-splide` library. It creates an engaging visual representation of partner logos that are shuffled and displayed in a looping manner.

## Features

- **Responsive Design**: The component adapts to different screen sizes, displaying up to four logo carousels on larger screens and fewer on smaller ones.
- **Auto-Play Carousels**: Each carousel automatically plays through the logos, creating a dynamic and interactive user experience.
- **Shuffling Partners**: The order of the logos is randomized every 30 seconds, ensuring a fresh display each time a user visits.
- **Custom Styling**: Logos are styled to fit within a designated area, maintaining uniformity and aesthetic appeal.

## Splide Options

The carousels are configured with the following options:

- **Type**: `loop` (allows infinite scrolling)
- **Direction**: `ttb` (top-to-bottom scrolling)
- **Height**: `5rem` (ensures consistent height across all carousels)
- **Arrows and Pagination**: Disabled for a cleaner look
- **Autoplay**: Enabled with a 3-second interval between slides
- **Speed**: Transition speed set to 1000ms
- **Easing**: Uses a `cubic-bezier` curve for smooth transitions
- **Pause on Hover**: Disabled to maintain uninterrupted flow

## Usage

This component is ideal for showcasing partners, sponsors, or clients in a visually appealing manner. Integrate it into your project to add a professional touch to your website's partner section.

## Dependencies

- `@splidejs/react-splide`
- `@splidejs/splide` CSS theme

## Installation

To use this component, ensure you have the required packages:

```bash
npm install @splidejs/react-splide
