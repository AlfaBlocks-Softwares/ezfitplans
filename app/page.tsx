import Badges from "@/components/ui/badges";
import Button from "@/components/ui/Button";
import FormGroup from "@/components/ui/FormGroup";
import { FormLabel } from "@/components/ui/FormLabel";
import Input from "@/components/ui/Input";
// import { Table } from "antd";

// const data = [
//   {
//     key: "1",
//     user: "Andrew Bojangles",
//     status: "Active",
//     phone: "+79000010101",
//     position: "Designer",
//     department: "Pride 1",
//     activity: "2 days ago",
//   },
//   {
//     key: "2",
//     user: "Andrew Bojangles",
//     status: "Active",
//     phone: "+79000010101",
//     position: "Designer",
//     department: "Pride 1",
//     activity: "2 days ago",
//   },
//   {
//     key: "3",
//     user: "Andrew Bojangles",
//     status: "Active",
//     phone: "+79000010101",
//     position: "Designer",
//     department: "Pride 1",
//     activity: "2 days ago",
//   },
//   {
//     key: "4",
//     user: "Andrew Bojangles",
//     status: "Active",
//     phone: "+79000010101",
//     position: "Designer",
//     department: "Pride 1",
//     activity: "2 days ago",
//   },
// ];

// const columns = [
//   {
//     title: "User",
//     dataIndex: "user",
//     key: "user",
//     // render: (text:string) => <strong>{text}</strong>,
//   },
//   {
//     title: "Status",
//     dataIndex: "status",
//     key: "status",
//   },
//   {
//     title: "Phone Number",
//     dataIndex: "phone",
//     key: "phone",
//   },
//   {
//     title: "Position",
//     dataIndex: "position",
//     key: "position",
//     // render: () => (
//     // ),
//   },
//   {
//     title: "Department",
//     dataIndex: "department",
//     key: "department",
//     // render: () => (
//     // ),
//   },
//   {
//     title: "Activity",
//     dataIndex: "activity",
//     key: "activity",

//     // render: () => (
//     // ),
//   },
//   {
//     key: "actions",

//     // render: () => (
//     // ),
//   },
// ];

export default function Home() {
  return (
    <>
      <Input type="text" name="name" className="w-40" />
      <Button>default</Button>
      <Button variant={"primary"} size={"md"}>
        medium + primary
      </Button>
      <Button variant={"secondary"} size={"lg"}>
        large
      </Button>
      <FormLabel>Name</FormLabel>

      <FormGroup>
        <FormLabel>Name</FormLabel>
        <Input type="text" className="w-60" />
      </FormGroup>

      <Badges title="Payment accept" description="10" mainTheme="muted" Icon />

      <div className="mt-spacing-l">Margin Testing</div>
      {/* <Table
        columns={columns}
        dataSource={data}
        pagination={{
          total: data.length,
          pageSize: 10,
          position: ["bottomRight"],
        }}
        rowKey="key"
        className="mt-spacing-m"
      /> */}
    </>
  );
}
