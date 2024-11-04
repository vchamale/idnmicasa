import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import Link from "next/link";

interface DashboardCardProps {
  title: string;
  description?: string;
  route: string;
}

const DashboardCard = ({ title, description, route }: DashboardCardProps) => {
  return (
    <Link href={route} passHref style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 345, minWidth: 275 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://1drv.ms/i/c/b00eeb6ef58d9d9f/IQQp-nMFt2CIQbFqXzsvGMuzAbeqrS2rTNJPDuyTi8-ru00?width=5184&height=3456"
            alt="musicos"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default DashboardCard;
