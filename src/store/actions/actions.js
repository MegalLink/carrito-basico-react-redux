import { createAction } from '@reduxjs/toolkit';
import { actionsEnum } from '../constants';

export const addProduct = createAction(actionsEnum.addProduct);
