import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export function Perfil() {
  return (
    <div>
  <ProgressBar animated now striped variant="success" now={40} />
  <ProgressBar animated now striped variant="info" now={20} />
  <ProgressBar animated now striped variant="warning" now={60} />
  <ProgressBar animated now striped variant="danger" now={80} />
</div>
  );
}
