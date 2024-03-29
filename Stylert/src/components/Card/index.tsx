import React from 'react';
// import { Text } from 'react-native';

import { Container, Label, Description } from './styles';

import { ICardProps, CardStatus, TCardStatusVariante } from './interface';

const Card = ({ amount, status }: ICardProps) => {
  // const isPaid = status === 'PAGO' ? 'success-400' : 'warning-400';

  const statusVariant: TCardStatusVariante = {
    PAGO: 'success-400',
    EM_ABERTO: 'warning-400',
    EM_ATRASO: 'error-400',
    REVERTIDO: 'neutral-700',
  };

  const isStatusReversed = status === 'REVERTIDO';

  return (
    <Container>
      <Label>{amount}</Label>
      <Description
        strikeThrough={isStatusReversed}
        color={statusVariant[status]}>
        {CardStatus[status]}
      </Description>
    </Container>
  );
};

export default Card;
