import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm'
import { transformationTypes } from '@/constants'
import React from 'react'

const AddTransformation = ({params: { type }}: SearchParamProps) => {
  const Transformation = transformationTypes[type]
  return (
    <>
      <Header title={Transformation.title} subTitle={Transformation.subTitle}/>
      <TransformationForm />
    </>
  )
}

export default AddTransformation