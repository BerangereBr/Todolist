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

export const themes = {
    orange: {
        '--bg': '#FFF7ED',
        '--bandeau': '#FFFFFF',
        '--todolist-name-hover': 'rgba(249, 115, 22, 0.9)',
        '--todo-item': '#FBFDFF',
        '--border': '#F97316',
        '--title-color': '#F97316',
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
        '--title-color': '#EF4444',
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
        '--title-color': '#8B5CF6',
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
        '--title-color': '#3B82F6',
        '--hover': '#60A5FA',
        '--bin': `url(${binBlue})`,
        '--arrow': `url(${arrowBlue})`,
        '--logout': `url(${logoutBlue})`,
        '--add-todolist': `url(${addTodolistBlue})`,
        '--add-todolist-hover': `url(${addTodolistHoverBlue})`,
    }
};