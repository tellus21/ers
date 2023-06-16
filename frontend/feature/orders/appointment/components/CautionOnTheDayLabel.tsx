import { Button, Group, Modal, Text } from '@mantine/core'

interface CautionOnTheDayLabelProps {
    opened: boolean
    open: () => void
    close: () => void
}

export function CautionOnTheDayLabel({
    opened,
    open,
    close,
}: CautionOnTheDayLabelProps) {
    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="Authentication"
                centered
            >
                {/* <DataTableBase
                    columns={tableColumns}
                    records={query}
                    onRowClick={(rowData) => onTableRowClick(rowData)}
                /> */}
            </Modal>

            <Group p={2}>
                <Text>特記事項</Text>
                <Button size="xs" onClick={open}>
                    選択
                </Button>
            </Group>
        </>
    )
}
