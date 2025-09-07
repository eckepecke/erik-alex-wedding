// filepath: /Users/viktor/Desktop/private/lek/baggen-and-emla-marriage/frontend/setupTests.ts
import '@testing-library/jest-dom';

// Polyfill for TextEncoder
import { TextEncoder, TextDecoder } from "util";
(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;
