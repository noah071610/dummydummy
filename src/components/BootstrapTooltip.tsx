import {
  styled as muiStyled,
  Tooltip as MuiTooltip,
  tooltipClasses,
  TooltipProps,
} from '@mui/material';

export const BootstrapTooltip = muiStyled(
  ({ className, ...props }: TooltipProps) => (
    <MuiTooltip {...props} classes={{ popper: className }} />
  )
)(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: 'rgba(255,255,255,0.8)',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: '10px 16px',
    color: 'black',
  },
}));
