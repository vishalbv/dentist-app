import classes from "./page.module.scss";
import classes2 from "../page.module.scss";
import { DrData } from "../drData";

export default function DrPage() {
  return (
    <div className={classes.root}>
      <DrData link={false} />
    </div>
  );
}
