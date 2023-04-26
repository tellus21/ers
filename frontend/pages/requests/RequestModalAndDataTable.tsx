import { convertDateProperty } from '@/common/lib'
import { Button, Container, Group, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DataTableBase } from '../components/DataTableBase'
import { usePatientFeature } from '../patients/patientFeature'
import { useMutateBase } from '@/common/hooks'

interface RequestModalAndDataTableProps {
    query: any
    logicalName: string
    modalSize?: string
    children: React.ReactNode
    form: any
    tableColumns: any
}

export function RequestModalAndDataTable({
    query,
    logicalName,
    modalSize,
    children,
    form,
    tableColumns,
}: RequestModalAndDataTableProps) {
    const [patientSearchModalOpened, patientSearchModalHandlers] =
        useDisclosure(false)
    const [createRequestModalOpened, createRequestModalHandlers] =
        useDisclosure(false)
    // const onModalCloseClick = () => modalHandlers.close()
    // const onCreateButtonClick = () => {
    //     form.reset()
    //     modalHandlers.open()
    // }

    //行を選択したら、user_idとpatient_idつきでrequestをpostする関数

    const filterById = (data: any[], id: string): object => {
        return data.filter((item) => item.id === id)[0]
    }

    const { query: patients } = usePatientFeature()

    const { createNewDataMutation } = useMutateBase('requests')
    const onPatientTableRowClick = (rowData: any) => {
        const postData: RequestFormValues = {
            // id: 0,
            user_id: 1, //ログイン者のidを入れる
            patient_id: rowData.id,
            created_at: new Date(),
            updated_at: new Date(),
            deleted_at: null,
        }
        // console.log(rowData)
        // const id = filterById(patients, rowData.id)
        // console.log(id.id)
        console.log(rowData.id)
        createNewDataMutation.mutate(postData)
    }

    return (
        <Container size="xl">
            <Text size="md">{`検査依頼一覧`}</Text>

            <Modal
                opened={patientSearchModalOpened}
                onClose={patientSearchModalHandlers.close}
                title={'患者検索'}
                size={modalSize}
            >
                <DataTableBase
                    columns={tableColumns}
                    records={patients}
                    onRowClick={(rowData) => onPatientTableRowClick(rowData)}
                />

                <Button>登録</Button>
            </Modal>

            <Group position="right">
                <Button
                    size="sm"
                    onClick={patientSearchModalHandlers.open}
                >{`${logicalName}登録`}</Button>
            </Group>

            {/* <DataTableBase
                columns={tableColumns}
                records={query}
                onRowClick={(rowData) => onTableRowClick(rowData)}
            /> */}
        </Container>
    )
}
