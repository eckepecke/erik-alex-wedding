// filepath: /Users/viktor/Desktop/private/lek/baggen-and-emla-marriage/frontend/setupTests.ts
import '@testing-library/jest-dom';

// Polyfill for TextEncoder
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;