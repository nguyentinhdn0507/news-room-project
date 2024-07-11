import React from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export const BreadcrumbsComponent = ({ links }) => {
  const location = useLocation();
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {links.map((link, index) => {
          const isActive = link.href === '/'
            ? true
            : location.pathname.startsWith(link.href);  
          return (
            <div key={link.href}>
              {link.href === '/' ? (
                <Link
                  underline="hover"
                  color={isActive ? 'red' : 'inherit'}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ) : (
                <Typography color={isActive ? 'red' : 'text.primary'}>
                  {link.label}
                </Typography>
              )}
            </div>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};
