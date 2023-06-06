import { Text } from '@/lib'
import Button from '@/lib/Button'
import Card, { CardBody, CardHeader } from '@/lib/Card'
import Form, { Input } from '@/lib/Form'
import { EmailIcon, GoogleIcon } from '@/lib/Icon'
import { Color } from '@/types/enum'
import React from 'react'

export default function login() {
  function submitHandler(event: any) {
    event.preventDefault()
  }
  return (
    <div id="login" className="flex justify-center items-center">
      <Card className="h-max w-4/12 border m-8">
        <CardHeader className="h-1/6 text-center text-white bg-teal-600 p-2">
          <Text>Login or Sign Up</Text>
        </CardHeader>
        <CardBody className="relative h-5/6">
          <Form className="w-full flex flex-col justify-evenly items-center py-2">
            <Input
              className="w-9/12 my-3"
              placeholder="Your E-Mail"
              defaultValue=""
              label="email"
              type="email"
            />
            <Input
              className="w-9/12 my-3"
              placeholder="Your Name"
              defaultValue=""
              label="name"
              type="text"
            />
            <Input
              className="w-9/12 my-3"
              placeholder="Your Password"
              defaultValue=""
              label="password"
              type="password"
            />
            <Button
              height="3rem"
              width="82%"
              bgColor={Color.Teal}
              color="white"
              className="w-11/12 my-3 rounded-lg"
              onClick={submitHandler}
            >
              Sign Up
            </Button>
          </Form>
          <div className="w-full h-max flex flex-col justify-evenly items-center pb-4">
            <Button
              height="3rem"
              width="90%"
              bgColor="white"
              color="black"
              className="relative w-11/12 my-3 border rounded-lg"
            >
              <GoogleIcon
                height="80%"
                className="absolute left-4 top-0 bottom-0 my-auto aspect-square"
              />
              <Text className="text-black">Sign In with Google</Text>
            </Button>
            <Button
              height="3rem"
              width="90%"
              bgColor="white"
              color="black"
              className="relative w-11/12 my-3 border rounded-lg"
            >
              <EmailIcon
                height="80%"
                className="absolute left-4 top-0 bottom-0 my-auto aspect-square"
              />
              <Text className="text-black">Sign In with E-Mail</Text>
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
