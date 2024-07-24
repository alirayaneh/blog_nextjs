# Simple Blog System

This project sets up a very simple blog system using Next.js version 14.2, Tailwind, Prisma, and PostgreSQL (Docker). It includes a simple dashboard with two types of users: regular and admin. We have used the `auth` package from Next.js in this project.

## Getting Started

### Clone the Repository

To start, clone this repository as follows:

```sh
git clone git@github.com:alirayaneh/blog_nextjs.git
cd blog_nextjs
yarn
```
Setting Up PostgreSQL with Docker

If you do not have PostgreSQL installed on your system, follow these steps to set up the PostgreSQL database using Docker:

    Open the terminal and run the following command to download the database image:

   ```sh

docker pull postgres
```

To get the list of available Docker images, execute the following command:

```sh

docker images
```
Run the following command to start PostgreSQL:

```sh

docker run --name postgresql -e POSTGRES_USER=myusername -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -v /data:/var/lib/postgresql/data -d postgres
```

The above command will start the PostgreSQL database on Docker and forward port 5432, making the database accessible at the following address:

```sh

    postgresql://myusername:mypassword@localhost:5432/postgres
```
Configure Environment Variables

Set the database URL in the .env file as follows:

```sh

DATABASE_URL=postgresql://myusername:mypassword@localhost:5432/postgres
```

Run Database Migrations

Run the following command in the terminal while in the blog_nextjs directory to create the tables in the database:

```sh

npx prisma migrate dev
```

Start the Development Server

Run the project with the following command:

```sh

yarn run dev
```
Granting Admin Access

To grant a user admin access so they can log into the dashboard and create blog posts, you need to manually set the admin role for the desired user in the users table in the database. You can use Prisma's data management system for this. Just run the following command:

```sh
npx prisma studio
```
Open Prisma Studio and update the role of the desired user to admin.


#####

persian md

در این پروژه با نسخه 14.2 nextjs + tailwind + prisma + postgres (docker) یک سیستم وبلاگ بسیار ساده راه اندازی شده . که دارای یک داشبورد ساده دو نوع یوزر عادی و ادمین میباشد. ما در این پروژه از پکیج auth next استفاده کردیم. 
برای شروع یک کلون از نرم این ریپازیتوری رو بصورت زیر دانلود کنید . 
```sh
git clone git@github.com:alirayaneh/blog_nextjs.git
cd blog_nextjs
yarn
```
سپس در صورتی که دیتا بیس postgres را روی سیستم نصب ندارید مراحل زیر را برای دسترسی نصب دیتابیس postgres از طریق داکر دنبال کنید . 

ابتدا ترمینال را باز کنید سپس کامند زیر را برای دانلود ایمیج دیتابیس بزنید 
```sh
docker pull postgres
```
برای بدست آوردن لیست Docker Images موجود، دستور زیر را اجرا کنید.
```sh
docker images
```
سپس دستور زیر را برای ران کردن postgres بزنید .
```sh
docker run --name postgresql -e POSTGRES_USER=myusername -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -v /data:/var/lib/postgresql/data -d postgres
```
با دستور بالا پایگاه داده postgress ابتدا روی داکر اجرا سپس پورت 5432 را به ۵۴۳۲ داکر فوروارد میکند بنابرین دیتابیس از طریق آدرس زیر در دسترس خواهد بود . 
```sh
postgresql://myusername:mypassword@localhost:5432/postgres
```
حال این آدرس را در فایل env ست کنید و سپس دستور زیر را در ترمینال و در پوشه blog_nextjs اجرا کنید . 
```sh
npx prisma migrate dev
```
با این دستور جداول در دیتابیس ایجاد میشود . 
سپس با دستور 
```sh
yarn run dev 
```
پروژه رو اجرا کنید . 

در نظر داشته باشید اینکه به یک یوزر دسترسی ادمین بدید که قادر به ورود به ده داشبورد و ایجاد پست برای وبلاگ باشه . نیازه که بصورت دستی در دیتابیس و در تیبل users رول  admin رو به یوزر مورد نظر ست کنید برای این کار میتوانید از سیستم مدیریت دیتا بیس پریزما نیز استفاده کنید . کافیه دستور زیر رو بزنید . 
```sh
npx prisma studio
```



