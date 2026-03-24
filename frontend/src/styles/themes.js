import binOrange from '../assets/images/theme-orange/delete-orange.png';
import binRed from '../assets/images/theme-red/delete-red.png';
import binPurple from '../assets/images/theme-purple/delete-purple.png';
import binBlue from '../assets/images/theme-blue/delete-blue.png';
import arrowOrange from '../assets/images/theme-orange/arrow-orange.png';
import arrowRed from '../assets/images/theme-red/arrow-red.png';
import arrowPurple from '../assets/images/theme-purple/arrow-purple.png';
import arrowBlue from '../assets/images/theme-blue/arrow-blue.png';
import logoutOrange from '../assets/images/theme-orange/logout-orange.png';
import logoutRed from '../assets/images/theme-red/logout-red.png';
import logoutPurple from '../assets/images/theme-purple/logout-purple.png';
import logoutBlue from '../assets/images/theme-blue/logout-blue.png';
import addTodolistOrange from '../assets/images/theme-orange/add-todolist-orange.png';
import addTodolistRed from '../assets/images/theme-red/add-todolist-red.png';
import addTodolistPurple from '../assets/images/theme-purple/add-todolist-purple.png';
import addTodolistBlue from '../assets/images/theme-blue/add-todolist-blue.png';
import addTodolistHoverOrange from '../assets/images/theme-orange/add-todolist-hover-orange.png';
import addTodolistHoverRed from '../assets/images/theme-red/add-todolist-hover-red.png';
import addTodolistHoverPurple from '../assets/images/theme-purple/add-todolist-hover-purple.png';
import addTodolistHoverBlue from '../assets/images/theme-blue/add-todolist-hover-blue.png';
import binWhite from '../assets/images/delete-hover.png';
import arrowWhite from '../assets/images/theme-dark/arrow-white.png';
import logoutWhite from '../assets/images/theme-dark/logout-white.png';
import addTodolistWhite from '../assets/images/theme-dark/add-todolist-white.png';
import addTodolistHoverWhite from '../assets/images/theme-dark/add-todolist-hover-white.png';

export const themes = {
    orange: {
        '--bg': '#FFF7ED',
        '--bandeau': '#FFFFFF',
        '--todolist-name-hover': 'rgba(249, 115, 22, 0.9)',
        '--todo-item': '#FBFDFF',
        '--border': '#F97316',
        '--border-loading': 'rgba(249, 115, 22, 0.3)',
        '--title-color': '#F97316',
        '--text': '#000000',
        '--text-secondary': '#ffffff',
        '--hover': '#FB923C',
        '--bin': `url(${binOrange})`,
        '--arrow': `url(${arrowOrange})`,
        '--logout': `url(${logoutOrange})`,
        '--add-todolist': `url(${addTodolistOrange})`,
        '--add-todolist-hover': `url(${addTodolistHoverOrange})`,

    },
    rouge: {
        '--bg': '#FEF2F2',
        '--bandeau': '#FFFFFF',
        '--todolist-name-hover': 'rgba(239, 68, 68, 0.9)',
        '--todo-item': '#FBFDFF',
        '--border': '#EF4444',
        '--border-loading': 'rgba(239, 68, 68, 0.3)',
        '--title-color': '#EF4444',
        '--text': '#000000',
        '--text-secondary': '#ffffff',
        '--hover': '#F87171',
        '--bin': `url(${binRed})`,
        '--arrow': `url(${arrowRed})`,
        '--logout': `url(${logoutRed})`,
        '--add-todolist': `url(${addTodolistRed})`,
        '--add-todolist-hover': `url(${addTodolistHoverRed})`,
    },
    violet: {
        '--bg': '#F5F3FF',
        '--bandeau': '#FFFFFF',
        '--todolist-name-hover': 'rgba(139, 92, 246, 0.9)',
        '--todo-item': '#FBFDFF',
        '--border': '#8B5CF6',
        '--border-loading': 'rgba(139, 92, 246, 0.3)',
        '--title-color': '#8B5CF6',
        '--text': '#000000',
        '--text-secondary': '#ffffff',
        '--hover': '#A78BFA',
        '--bin': `url(${binPurple})`,
        '--arrow': `url(${arrowPurple})`,
        '--logout': `url(${logoutPurple})`,
        '--add-todolist': `url(${addTodolistPurple})`,
        '--add-todolist-hover': `url(${addTodolistHoverPurple})`,

    },
    bleu: {
        '--bg': '#EFF6FF',
        '--bandeau': '#FFFFFF',
        '--todolist-name-hover': 'rgba(59, 130, 246, 0.9)',
        '--todo-item': '#FBFDFF',
        '--border': '#3B82F6',
        '--border-loading': 'rgba(59, 130, 246, 0.3)',
        '--title-color': '#3B82F6',
        '--text': '#000000',
        '--text-secondary': '#ffffff',
        '--hover': '#60A5FA',
        '--bin': `url(${binBlue})`,
        '--arrow': `url(${arrowBlue})`,
        '--logout': `url(${logoutBlue})`,
        '--add-todolist': `url(${addTodolistBlue})`,
        '--add-todolist-hover': `url(${addTodolistHoverBlue})`,
    },
    dark: {
        '--bg': '#1E1E1E',
        '--bandeau': '#252526',
        '--todo-item': '#2D2D2D',
        '--border': '#3F3F46',
        '--border-loading': 'rgba(0, 0, 0, 0.3)',
        '--title-color': '#F3F4F6',
        '--text': '#E5E7EB',
        '--text-secondary': '#A1A1AA',
        '--hover': '#3A3A3A',
        '--todolist-name-hover': '#404040',
        '--shadow': '0 4px 10px rgba(0,0,0,0.3)',
        '--bin': `url(${binWhite})`,
        '--arrow': `url(${arrowWhite})`,
        '--logout': `url(${logoutWhite})`,
        '--add-todolist': `url(${addTodolistWhite})`,
        '--add-todolist-hover': `url(${addTodolistHoverWhite})`,
    }
};