import { DataTableBase } from '@/feature/components/DataTableBase'
import {
    ImportantPoint,
    useImportantPointFeature,
} from '@/feature/important-points/ImportantPointFeature'
import { Button, Group, Modal, Text } from '@mantine/core'

interface CautionOnTheDayLabelProps {
    opened: boolean
    open: () => void
    close: () => void
    form: any
}

export function CautionOnTheDayLabel({
    opened,
    open,
    close,
    form,
}: CautionOnTheDayLabelProps) {
    const { columns, query } = useImportantPointFeature()
    const onTableRowClick = (
        rowData: ImportantPoint,
        form: any,
        close: () => void
    ) => {
        form.setFieldValue('caution_on_the_day', rowData.important_point)
        close()
    }

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="当日当日注意事項選択"
                centered
            >
                <DataTableBase
                    columns={columns}
                    addDateColumns={false}
                    records={query}
                    onRowClick={(rowData) =>
                        onTableRowClick(rowData, form, close)
                    }
                />
            </Modal>

            <Group p={2}>
                <Text>当日当日注意事項</Text>
                <Button size="xs" onClick={open}>
                    選択
                </Button>
            </Group>
        </>
    )
}
