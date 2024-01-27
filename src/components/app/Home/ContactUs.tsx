"use client";

import { useEffect, useState } from "react";

//mantine
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Container,
  Box,
  Stack,
  rem,
  Select,
} from "@mantine/core";

//react icons
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconSun,
  IconPhone,
  IconMapPin,
  IconAt,
} from "@tabler/icons-react";

//styles
import classes from "./ContactUs.module.css";

//interfaces
import { Project } from ".";
import { Contact } from "interfaces/contact";
import { sendContact } from "services/api";

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

interface ContactUsProps {
  projects: Project[];
  handleSetProject: (value: string) => void;
  project: string;
}

interface Data {
  value: string;
  label: string;
}

const initialDataContact: Contact = {
  email: "",
  full_name: "",
  message: "",
  title: "web app",
};

export function ContactUs({
  projects,
  project,
  handleSetProject,
}: ContactUsProps) {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const newData: Data[] = projects.map(({ value, label }) => ({
      value,
      label,
    }));

    setData([...newData]);
  }, []);

  const form = useForm({
    initialValues: initialDataContact,
    validate: {
      email: (val) => (/^\S+@\S+\.\S+$/.test(val!) ? null : "Invalid email"),
      full_name: (val) => (val ? null : "This field is required"),
      message: (val) => (val ? null : "This field is required8"),
      title: (val) => (val ? null : "This field is required8"),
    },
  });

  return (
    <Container size={"xl"} id="form_contact">
      <div className={classes.wrapper}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Contacto</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Deje su correo electrónico y nos comunicaremos con usted dentro de
              las 24 horas
            </Text>

            <ContactIconsList />

            <Group mt="xl">
              {social.map((Icon, index) => (
                <ActionIcon
                  key={index}
                  size={28}
                  className={classes.social}
                  variant="transparent"
                >
                  <Icon size="1.4rem" stroke={1.5} />
                </ActionIcon>
              ))}
            </Group>
          </div>
          <form
            className={classes.form}
            onSubmit={form.onSubmit(async () => {
              if (loading) return;
              try {
                setLoading(true);
                await sendContact(form.values);
                notifications.show({
                  title: "Enviado",
                  message:
                    "Tu información de contacto se ha registrado correctamente",
                  color: "green",
                });
                form.setValues(initialDataContact);
                setLoading(false);
              } catch (error) {
                setLoading(false);
                notifications.show({
                  title: "Error",
                  message: "Algo ha fallado",
                  color: "red",
                });
              }
            })}
          >
            <Select
              placeholder="Pick value"
              data={[...data]}
              style={{ marginBottom: "15px" }}
              value={project}
              onChange={(value) => {
                handleSetProject(value!);
                const hola = projects.filter((project) => {
                  return project.value === value;
                });
                form.setFieldValue("title", hola[0].name!);
              }}
            />
            <TextInput
              label="Email"
              placeholder="tuemail@gmail.com"
              autoComplete="off"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email}
            />
            <TextInput
              label="Nombre completo"
              placeholder="Hebert Villafuerte"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              required
              autoComplete="off"
              value={form.values.full_name}
              onChange={(event) =>
                form.setFieldValue("full_name", event.currentTarget.value)
              }
              error={form.errors.full_name}
            />
            <Textarea
              required
              label="Tu mensaje"
              placeholder="Quiero contratar tu servicios"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              autoComplete="off"
              value={form.values.message}
              onChange={(event) =>
                form.setFieldValue("message", event.currentTarget.value)
              }
              error={form.errors.message}
            />

            <Group justify="flex-end" mt="md">
              <Button variant="filled" type="submit" loading={loading}>
                Enviar datos
              </Button>
            </Group>
          </form>
        </SimpleGrid>
      </div>
    </Container>
  );
}

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  ...others
}: ContactIconProps) {
  return (
    <div className={classes.wrapper_icons} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title_icons}>
          {title}
        </Text>
        <Text className={classes.description_icons}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: "Email", description: "hebertdev@outlook.com", icon: IconAt },
  { title: "Phone", description: "+51 942885252", icon: IconPhone },
  { title: "Address", description: "Perú - Arequipa", icon: IconMapPin },
  { title: "Working hours", description: "8 a.m. – 6 p.m.", icon: IconSun },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
