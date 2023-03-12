import { useFormContext } from 'react-hook-form'

import { Input } from '../../../../Components/Input'

import { AddressFormContainer } from './styles'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register('cep')}
      />
      <Input
        placeholder="Rua"
        type=""
        className="street"
        {...register('street')}
      />
      <Input placeholder="Número" type="number" {...register('number')} />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
      />
      <Input placeholder="Bairro" {...register('district')} />
      <Input placeholder="Cidade" {...register('city')} />
      <Input placeholder="UF" {...register('uf')} />
    </AddressFormContainer>
  )
}
