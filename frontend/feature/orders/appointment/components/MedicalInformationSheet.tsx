import { useDisclosure } from '@mantine/hooks'
import { Modal, Button, Group } from '@mantine/core'

export function MedicalInformationSheet() {
    const [opened, { open, close }] = useDisclosure(false)

    return (
        <>
            <Modal opened={opened} onClose={close} title="介助問診表示">
                問診表
            </Modal>

            <Group position="center">
                <Button color="gray.6" onClick={open}>
                    問診編集
                </Button>
            </Group>
        </>
    )
}
