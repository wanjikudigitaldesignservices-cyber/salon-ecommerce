-- Supabase Postgres
create table categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type text not null check (type in ('beauty_product','wig')),
  slug text unique not null
);

create table products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references categories(id),
  name text not null,
  slug text unique not null,
  description text,
  price numeric(10,2) not null,
  images text[] not null default '{}',
  in_stock boolean default true,
  attributes jsonb default '{}', -- e.g. {"length":"18in","texture":"straight","density":"150%"} for wigs
  created_at timestamptz default now()
);

create table appointment_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  service text not null,
  preferred_date date,
  preferred_time time,
  notes text,
  status text default 'pending' check (status in ('pending','confirmed','cancelled')),
  created_at timestamptz default now()
);

create table testimonials (
  id uuid primary key default gen_random_uuid(),
  client_name text not null,
  quote text not null,
  rating int check (rating between 1 and 5),
  approved boolean default false
);

create table gallery_images (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  category text, -- 'interior' | 'hair' | 'nails' | 'wigs' | 'before_after'
  caption text
);

-- Row Level Security
alter table categories enable row level security;
alter table products enable row level security;
alter table appointment_requests enable row level security;
alter table testimonials enable row level security;
alter table gallery_images enable row level security;

-- Policies
create policy "Allow public read-only access to categories" on categories for select using (true);
create policy "Allow public read-only access to products" on products for select using (true);
create policy "Allow public read-only access to approved testimonials" on testimonials for select using (approved = true);
create policy "Allow public read-only access to gallery_images" on gallery_images for select using (true);

-- Allow public insert to appointment_requests
create policy "Allow public insert to appointment_requests" on appointment_requests for insert with check (true);
